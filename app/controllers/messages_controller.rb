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

    private

    def message_params
        params.permit(:content, :group_id, :user_id)
    end
end
