class Group < ApplicationRecord
    has_many :messages
    has_many :joined_groups
    has_many :members, through: :joined_groups, source: :user
    belongs_to :user #Admin
end
