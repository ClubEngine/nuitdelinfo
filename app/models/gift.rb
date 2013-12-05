class Gift < ActiveRecord::Base
  has_many :associations
  has_many :ducks, through: :associations
  accepts_nested_attributes_for :associations
  
  attr_accessor :score
  
  def bests(ducks_yes, ducks_no)
    gifts = Gift.includes(:associations => :ducks)
    gifts.each do |gift|
      gift.score = gift.associations.injects do |sum, assoc|
        diff = assoc.value - 50
        if ducks_yes.include?(assoc.duck)
          sum += diff
        end
        if ducks_no.include?(assoc.duck)
          sum -= diff
        end
        sum
      end
    end
    gifts.sort_by(:score)
  end
end
