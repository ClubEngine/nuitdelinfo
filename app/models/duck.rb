class Duck < ActiveRecord::Base
  has_many :associations
  has_many :gifts, through: :associations
  accepts_nested_attributes_for :associations
end
