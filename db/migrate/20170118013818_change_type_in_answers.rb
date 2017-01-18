class ChangeTypeInAnswers < ActiveRecord::Migration[5.0]
  def change
    remove_column :answers, :type
    add_column :answers, :answer_type, :string
  end
end
