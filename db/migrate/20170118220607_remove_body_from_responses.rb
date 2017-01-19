class RemoveBodyFromResponses < ActiveRecord::Migration[5.0]
  def change
    remove_column :responses, :body
  end
end
