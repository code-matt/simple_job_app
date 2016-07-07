class Job < ApplicationRecord
  validates :name, :description, :wage, presence: true
end
