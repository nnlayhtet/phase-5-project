class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :group_id, :user_id, :time, :sender_name

  def time
    self.object.created_at.strftime("%l:%M %p  (%b %e, %y)")
  end

  def sender_name
    self.object.sender.username
  end

end
