class Gift < ActiveRecord::Base
  has_many :associations
  has_many :ducks, through: :associations
  accepts_nested_attributes_for :associations
  
  attr_accessor :score
  
  def self.bests(ducks_yes, ducks_no)
    gifts = Gift.includes(:associations => :duck)
    gifts.each do |gift|
      s = 0
      gift.associations.each do |assoc|
        diff = assoc.value - 50
        if assoc.duck
          if ducks_yes.include?(assoc.duck.id.to_s)
            s += diff
          end
          if ducks_no.include?(assoc.duck.id.to_s)
            s -= diff
          end
        end
      end
      gift.score = s
    end
    gifts.sort_by{|g|[g.score]}.reverse
  end
end
