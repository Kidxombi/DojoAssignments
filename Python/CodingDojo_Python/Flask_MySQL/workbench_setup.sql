select *
from users
left join tweets
on users.id = tweets.user_id
where users.id = 1;

select tweets.tweet
from users
left join tweets
on users.id = tweets.user_id
where users.id = 1;
