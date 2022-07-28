class GroupChannel < ApplicationCable::Channel
    # calls when a client connects to the server
    # def subscribed
    #     @group = Group.find_by(id: params[:group])
    #     @user = User.find_by(id: params[:user])
    #     stream_for @group
    #     GroupChannel.broadcast_to(@group, {
    #         group: GroupSerializer.new(@group),
    #         users: UserSerializer.new(@group.users),
    #         messages: @group.messages
    #      })
    # end

    # def unsubscribed
    #     GroupChannel.broadcast_to(@group, {
    #         group: GroupSerializer.new(@group),
    #         users: UserSerializer.new(@group.users),
    #         messages: @group.messages
    #     })
    # end

    def subscribed
        group = Group.find(params[:id])
        messages = group.messages
        stream_for group
    end

    def received(data)
        # GroupChannel.broadcast_to(group, { content: content, group_id: group.id, messages: group.messages })
        # GroupChannel.broadcast_to(group, data)
        GroupChannel.broadcast_to()
    end

    def unsubscribed
        stop_all_streams
    end

end