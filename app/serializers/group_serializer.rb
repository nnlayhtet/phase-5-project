class GroupSerializer < ActiveModel::Serializer
  attributes :id, :topic, :created_by, :user_id, :created_at
  has_many :members
end
