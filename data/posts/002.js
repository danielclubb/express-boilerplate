const content = `<p>On paper, both Django and Express make use of the archetypal Model, View, Controller (MVC) design pattern to render
    views to the user. Separating the logic into these logical parts makes the development process easier and aids in
    readability and maintenance.</p>
<p>This makes the transition from django to express fairly easy in the early stages of learning, but can become
    confusing when referring to documentation as the two frameworks define views and controllers in slightly different
    ways.</p>
<h2 class="mt-5">Models</h2>
<p>The model simply refers to the database schema that is available to the view/controller. Both frameworks will need to
    access the database at some point in order to retrieve data for rendering in the template.</p>
<h2 class="mt-5">Django Views === Express Controllers</h2>
<p>This is where things can get confusing. According to Django&rsquo;s own documentation:</p>
<blockquote class="blockquote text-center my-5"><em>&quot;A view function, or view for short, is a Python function that
        takes a web request and returns a web response.&rdquo;</em></blockquote>
<p>However, Express.js defines the view as the HTML template that the controller uses to render the data from the
    controller to the client. Instead, the Express equivalent of the &lsquo;view&rsquo; in Django is the controller.</p>
<p>Here&rsquo;s an example of the view/controller in each:</p>
<p><code
        class="d-block p-3">// Express.js<br/>async function homepageController(request, response, render){<br/>&nbsp; &nbsp;const viewContext={<br/>&nbsp; &nbsp; &nbsp; pageTitle: &lsquo;Homepage&rsquo;<br/>&nbsp; &nbsp;}<br/>&nbsp; &nbsp;return response.render(&lsquo;home&rsquo;, viewContext);<br/>}</code>
</p>
<p><code
        class="d-block p-3"># Django <br/>def homepageView(request):<br/>&nbsp; &nbsp;context={<br/>&nbsp; &nbsp; &nbsp; &lsquo;pageTitle&rsquo;: &lsquo;Homepage&rsquo;<br/>&nbsp; &nbsp;}<br/>&nbsp; &nbsp;return render(request, &lsquo;home.html&rsquo;, context) </code>
</p>
<p>As you can see, the two functions are almost a line-by-line translation of one another. The context is created, then
    we return a render function that takes the name of the template and the view context as arguments.</p>
<h2 class="mt-5">Django Templates === Express Views</h2 class="mt-5">
<p>Django templates and Express views are exactly the same. They are HTML-based files that can have data passed to them
    from the view in order to render them to the user. As seen above, the data is provided to the template using the
    view context argument that is passed to the template. Here&rsquo;s an example:</p>
<p><code class="d-block p-3">{{!-- Handlebars.js --}}<br/>&lt;h1&gt;{{title}}&lt;/h1&gt; </code></p>
<p><code
        class="d-block p-3">&lt;!-- Django&#39;s HTML Templating language --&gt;<br/>&lt;h1&gt;{{title}}&lt;/h1&gt; </code>
</p>`;

module.exports = {
    content
}