json.array!(@associations) do |association|
  json.extract! association, :id, :duck_id, :gift_id, :value
  json.url association_url(association, format: :json)
end
