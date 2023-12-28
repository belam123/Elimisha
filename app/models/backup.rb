# app/models/backup.rb

class Backup < ApplicationRecord
    has_one_attached :backup_file
  
    def self.upload_to_storage(file_path)
    end
  
    private
  
    def self.create_backup_attachment(file_path)
      create(backup_file: File.basename(file_path))
    end
  end
  