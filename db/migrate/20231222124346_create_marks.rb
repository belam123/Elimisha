class CreateMarks < ActiveRecord::Migration[7.0]
  def change
    create_table :marks do |t|
      t.integer :exam_score, default: 0
      t.integer :assignment_score, default: 0
      t.integer :quiz_score, default: 0
      
      t.references :student, null: false, foreign_key: true
      t.references :subject, null: false, foreign_key: true
      t.timestamps
    end
  end
end
