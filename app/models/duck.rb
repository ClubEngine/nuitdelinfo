class Duck < ActiveRecord::Base
  has_many :associations
  has_many :gifts, through: :associations
end
