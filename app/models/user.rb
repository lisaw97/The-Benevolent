class User < ApplicationRecord
    validates :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :transactions
    has_many :stocks,
        through: :transactions,
        source: :stock
    
    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
