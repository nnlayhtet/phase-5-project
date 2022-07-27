class Message < ApplicationRecord
    # belongs_to :user
    belongs_to :sender, class_name: :User, foreign_key: 'user_id'
    belongs_to :group 

    validates_presence_of :content
end 