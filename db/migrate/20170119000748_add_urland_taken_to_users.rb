class AddUrlandTakenToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :live_url, :string
    add_column :users, :live_group, :string
    add_column :users, :polls_taken, :integer
  end
end
