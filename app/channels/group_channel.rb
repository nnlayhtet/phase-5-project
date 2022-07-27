class GroupChannel < ApplicationCable::Channel
    # calls when a client connects to the server
    def subscribed
        @group = Group.find_by(id: params[:group])
        @user = User.find_by(id: params[:user])
        stream_for @group
        GroupChannel.broadcast_to(@group, {
            group: GroupSerializer.new(@group),
            users: UserSerializer.new(@group.users),
            messages: @group.messages
         })
    end

    def unsubscribed
        GroupChannel.broadcast_to(@group, {
            group: GroupSerializer.new(@group),
            users: UserSerializer.new(@group.users),
            messages: @room.messages
        })
    end

  

end