class CreateBackups < ActiveRecord::Migration[7.0]
  def change
    create_table :backups do |t|
      t.string :backup_file

      t.timestamps
    end
  end
end
