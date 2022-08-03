class AddLikedByToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :liked_by, :string
  end
end
