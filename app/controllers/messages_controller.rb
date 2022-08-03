class MessagesController < ApplicationController
    def index
        render json: Message.all
    end
    
    # def create
    #     message = Message.create!(message_params)
    #     render json: message
    # end
    def create
        message = Message.new(message_params)
        group = Group.find(message_params[:group_id])
        if message.save
            GroupChannel.broadcast_to group, message
            head :ok
        end
    end

    def update
        message = Message.find(params[:id])
        message.content = "*message deleted*"
        message.save
        group = Group.find(message.group_id)
        render json: group.messages.sort
    end

    def edit_update
        message = Message.find(params[:message_id])
        message.content = params[:content]
        message.save
        group = Group.find(message.group_id)
        render json: group.messages.sort
    end

    def like_update
        message = Message.find(params[:message_id])
        if message.liked_by === nil
            message.liked_by = params[:liked_by]
            message.save
            group = Group.find(message.group_id)
            render json: group.messages.sort
        elsif message.liked_by.exclude?(params[:liked_by])
            message.liked_by << ", "
            message.liked_by << params[:liked_by]
            message.save
            group = Group.find(message.group_id)
            render json: group.messages.sort
        else
            group = Group.find(message.group_id)
            render json: group.messages.sort
        end
    end

    private

    def message_params
        params.permit(:content, :group_id, :user_id)
    end
end
