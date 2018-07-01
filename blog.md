---
layout: page
title: Blog
permalink: /blog/
class: content
order: 2
---


<!-- This loops through the paginated posts -->
<ul class="blog-list">
	{% for post in site.posts %}
	<li class="blog-item">
	  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	  <p class="author">
	    <span class="date">{{ post.date | date_to_string }}</span>
	  </p>
<!-- 	  <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 156 }}</p> -->
		<a href="{{ post.url }}" class="read-more" role="button">Read Full Article</a>
	</li>
	{% endfor %}
</ul>
