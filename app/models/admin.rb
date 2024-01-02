class Admin < ApplicationRecord
    before_create :generate_access_token
    has_secure_password


        def generate_access_token
            payload = { admin_id: id, email: email }
            puts "Generated payload: #{payload}"
            self.access_tokens = JWT.encode(payload, 'your_secret_key', 'HS256')
          end
end
