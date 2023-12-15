class CreateGrades < ActiveRecord::Migration[7.0]
  def change
    create_table :grades do |t|
      t.integer :score
      t.text :comments
      
      t.references :student, null: false, foreign_key: true
      t.references :course, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
