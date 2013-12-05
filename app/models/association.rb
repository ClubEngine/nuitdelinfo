class Association < ActiveRecord::Base
  belongs_to :duck
  belongs_to :gift
end
