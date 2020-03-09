class User < ApplicationRecord
    has_many :cases
    has_many :comments
end
