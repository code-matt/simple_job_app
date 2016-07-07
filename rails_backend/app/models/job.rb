class Job < ApplicationRecord
  validates :name, :description, :wage, presence: true

  validates :wage, numericality: { greater_than: 15 }
end
