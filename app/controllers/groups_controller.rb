class GroupsController < ApplicationController

    def index
        render json: Group.all
    end

    def show
        group = Group.find(params[:id])
        render json: group
    end

    def messages_index
        group = Group.find(params[:group_id])
        messages = group.messages
        render json: messages.sort
    end

    def join_group_create
        group = Group.find(params[:group_id])
        joined_group = JoinedGroup.create!(user_id: params[:user_id], group_id: group.id)
        render json: group
    end

    def leave_group_destroy
        joined_groups_by_user = JoinedGroup.where(user_id: params[:user_id])
        leaving_group = joined_groups_by_user.find_by(group_id: params[:group_id])
        leaving_group.destroy
        render json: Group.all
    end

    def create
        group = Group.create!(group_params)
        joined_group = JoinedGroup.create!(user_id: group.user_id, group_id: group.id)
        render json: group, status: :created
    end

    def destroy
        group = Group.find(params[:id])
        group.destroy
        head :no_content
    end

    private

    def group_params
        params.permit(:topic, :created_by, :user_id)
    end
end
