class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :topic
      t.string :created_by
      t.integer :user_id

      t.timestamps
    end
  end
end
