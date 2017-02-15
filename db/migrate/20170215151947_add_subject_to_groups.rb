class AddSubjectToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :subject, :string
  end
end
