namespace :backup do
    desc 'Backup MySQL database and upload to Rails storage'
    task :perform => :environment do
      backup_path = 'config/backup.sql'
      Backup.upload_to_storage(backup_path)
    end
  end