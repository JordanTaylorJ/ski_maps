class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :resort_id
end
