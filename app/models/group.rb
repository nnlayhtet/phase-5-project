class Group < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :joined_groups, dependent: :destroy
    has_many :members, through: :joined_groups, source: :user
    belongs_to :user # Admin/Group creator

    validates :topic, presence: true
end
