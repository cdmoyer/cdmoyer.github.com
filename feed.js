---
layout: nil
---
pageapp.ramblings([
	{% for post in site.posts offset: 0 limit: 10 %}
    {% if !post.draft %}
	{title: "{{ post.title | escape}}", url: "http://blog.inarow.net{{ post.url }}"} ,
    {% endif %}
	{% endfor %}
	null
]);
