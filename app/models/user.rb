class User < ApplicationRecord
    has_secure_password
    has_many :joined_groups
    has_many :messages
    has_many :groups, through: :joined_groups
end
