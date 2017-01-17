class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.integer :question_id, null: false
      t.text :body, null: false
      t.string :type, null: false
      t.timestamps
    end
  end
end
