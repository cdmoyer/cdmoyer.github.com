---
layout: nil
---
pageapp.ramblings([
	{% for post in site.posts offset: 0 limit: 10 %}
	{title: "{{ post.title | escape}}", url: "http://blog.inarow.net{{ post.url }}"} ,
	{% endfor %}
	null
]);
