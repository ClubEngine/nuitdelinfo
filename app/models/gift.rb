class Gift < ActiveRecord::Base
  has_many :associations
  has_many :ducks, through: :associations
  
  def bests(ducks_yes, ducks_no)
    gifts = Gift.includes(:ducks)
    numbers_yes = {}
    numbers_no = {}
    gifts.each do |gift|
      numbers[gift.id]
    end
  end
end
