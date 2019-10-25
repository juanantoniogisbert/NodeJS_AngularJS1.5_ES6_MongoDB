angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article-actions.html","<article-meta article=\"$ctrl.article\">\n  <span ng-show=\"$ctrl.canModify\">\n    <a class=\"btn btn-sm btn-outline-secondary\"\n      ui-sref=\"app.editor({ slug: $ctrl.article.slug })\">\n      <i class=\"ion-edit\"></i> Edit Article\n    </a>\n\n    <button class=\"btn btn-sm btn-outline-danger\"\n      ng-class=\"{disabled: $ctrl.isDeleting}\"\n      ng-click=\"$ctrl.deleteArticle()\">\n      <i class=\"ion-trash-a\"></i> Delete Article\n    </button>\n  </span>\n\n  <span ng-hide=\"$ctrl.canModify\">\n    <follow-btn user=\"$ctrl.article.author\"></follow-btn>\n    <favorite-btn article=\"$ctrl.article\">\n      {{ $ctrl.article.favorited ? \'Unfavorite\' : \'Favorite\' }} Article <span class=\"counter\">({{$ctrl.article.favoritesCount}})</span>\n    </favorite-btn>\n  </span>\n\n</article-meta>\n");
$templateCache.put("article/article.html","<div class=\"article-page\">\n\n  <!-- Banner for article title, action buttons -->\n  <div class=\"banner\">\n    <div class=\"container\">\n\n      <h1 ng-bind=\"::$ctrl.article.title\"></h1>\n\n      <div class=\"article-meta\">\n        <!-- Show author info + favorite & follow buttons -->\n        <article-actions article=\"$ctrl.article\"></article-actions>\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Main view. Contains article html and comments -->\n  <div class=\"container page\">\n\n    <!-- Article\'s HTML & tags rendered here -->\n    <div class=\"row article-content\">\n      <div class=\"col-xs-12\">\n\n        <div ng-bind-html=\"::$ctrl.article.body\"></div>\n\n        <ul class=\"tag-list\">\n          <li class=\"tag-default tag-pill tag-outline\"\n            ng-repeat=\"tag in ::$ctrl.article.tagList\">\n            {{ tag }}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n\n      \n    </div>\n    \n    <!-- Comments section -->\n    \n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n        <div show-authed=\"true\">\n          <list-errors from=\"$crl.commentForm.errors\"></list-errors>\n          \n          <!-- Show author info + favorite & follow buttons -->\n          <article-actions article=\"$ctrl.article\"></article-actions>\n          <!-- axant-->\n\n          <h1>hola</h1>\n\n          <div class=\"list-meta\">\n              <list-preview article=\"$ctrl.article\"></list-preview>\n      \n            </div>\n\n          <form class=\"card comment-form\" ng-submit=\"$ctrl.addComment()\">\n            <fieldset ng-disabled=\"$ctrl.commentForm.isSubmitting\">\n              <div class=\"card-block\">\n                <textarea class=\"form-control\"\n                  placeholder=\"Write a comment...\"\n                  rows=\"3\"\n                  ng-model=\"$ctrl.commentForm.body\"></textarea>\n              </div>\n              <div class=\"card-footer\">\n                <!-- <img ng-src=\"{{::$ctrl.currentUser.image}}\" class=\"comment-author-img\" /> -->\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n                 Post Comment\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n        <div show-authed=\"false\">\n          <a ui-sref=\"app.login\">Sign in</a> or <a ui-sref=\"app.register\">sign up</a> to add comments on this article.\n        </div>\n\n        <comment ng-repeat=\"cmt in $ctrl.comments\"\n          data=\"cmt\"\n          delete-cb=\"$ctrl.deleteComment(cmt.id, $index)\">\n        </comment>\n\n\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n");
$templateCache.put("article/comment.html","<div class=\"card\">\n  <div class=\"card-block\">\n    <p class=\"card-text\" ng-bind=\"::$ctrl.data.body\"></p>\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\">\n      <img ng-src=\"{{::$ctrl.data.author.image}}\" class=\"comment-author-img\" />\n    </a>\n    &nbsp;\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\" ng-bind=\"::$ctrl.data.author.username\">\n    </a>\n    <span class=\"date-posted\"\n      ng-bind=\"::$ctrl.data.createdAt | date: \'longDate\'\">\n    </span>\n    <span class=\"mod-options\" ng-show=\"$ctrl.canModify\">\n      <i class=\"ion-trash-a\" ng-click=\"$ctrl.deleteCb()\"></i>\n    </span>\n  </div>\n</div>\n");
$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'register\'\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Nombre\"\n                ng-model=\"$ctrl.formData.nombre\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\"\n              ng-bind=\"::$ctrl.title\">\n            </button>\n\n            <a href=\"http://localhost:3001/api/auth/github\" style=\"font-size: 25px; color:black\"><i class=\"ion-social-github\"></i>&nbsp;Github</a>\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("contact/contact.html"," <contact-form></contact-form>");
$templateCache.put("contact/fromContact.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"well well-sm\">\n                <form id=\"contactForm\" name=\"contactForm\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input required ng-model=\"$ctrl.contact.inputName\" id=\"inputName\" name=\"inputName\" type=\"text\" placeholder=\"Enter name\" class=\"form-control\" ng-minlength=\"3\" ng-maxlength=\"20\" ng-model-options=\"{  debounce: 500 }\">\n                                <span ng-show=\"contactForm.inputName.$error.required && (contactForm.inputName.$dirty || contactForm.inputName.$touched)\">Enter a name</span>\n                                <span ng-show=\"contactForm.inputName.$error.minlength || contactForm.inputName.$error.maxlength && (contactForm.inputName.$dirty || contactForm.inputName.$touched)\">Enter between 3 and 20 characters</span>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Message</label>\n                                <textarea style=\"resize: none;\" required ng-model=\"$ctrl.contact.inputMessage\" name=\"inputMessage\" class=\"form-control\" rows=\"9\" cols=\"25\" id=\"inputMessage\" ng-minlength=\"20\" ng-maxlength=\"100\" ng-model-options=\"{  debounce: 500 }\" placeholder=\"Please enter your message here...\"></textarea>\n                                <span ng-show=\"contactForm.inputMessage.$error.required && (contactForm.inputMessage.$dirty || contactForm.inputMessage.$touched)\">Introduzca un mensaje</span>\n                                <span ng-show=\"contactForm.inputMessage.$error.minlength\">Enter more than 20 characters</span>\n                                <span ng-show=\"contactForm.inputMessage.$error.maxlength\">Enter less than 100 characters</span>\n                            </div>\n                        </div> -->\n                        <div class=\"col-md-12\">\n                            <input class=\"btn btn-primary pull-right\" type=\"submit\" id=\"submitBtn\" name=\"submit\" value=\"Send\"\n                            ng-hide=\"contactForm.inputName.$valid && contactForm.inputMail.$valid && contactForm.inputSubject.$modelValue && contactForm.inputMessage.$valid\"\n                            ng-click=\"$ctrl.nvalidContact()\"/>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("deporte/deporte.html","<h1>hola</h1>");
$templateCache.put("details/detailsHome.html","<h1>{{$ctrl.deportesDet.name}}</h1>");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                ng-model=\"$ctrl.article.description\"\n                type=\"text\"\n                placeholder=\"What\'s this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.body\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                ng-model=\"$ctrl.tagField\"\n                ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n              <div class=\"tag-list\">\n                <span ng-repeat=\"tag in $ctrl.article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("home/home.html"," <div class=\"home-page\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container\">\n      <h1 class=\"logo-font\" ng-bind=\"::$ctrl.appName | lowercase\"></h1>\n      <p>A place to share your knowledge.</p>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n\n\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-9\">\n        <!-- Tabs for toggling between feed, article lists -->\n        <div class=\"feed-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\" show-authed=\"true\">\n              <a href=\"\" class=\"nav-link\"\n                ng-class=\"{ active: $ctrl.listConfig.type === \'feed\' }\"\n                ng-click=\"$ctrl.changeList({ type: \'feed\' })\">\n                Your Feed\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a href=\"\" class=\"nav-link\"\n                ng-class=\"{ active: $ctrl.listConfig.type === \'all\' && !$ctrl.listConfig.filters }\"\n                ng-click=\"$ctrl.changeList({ type: \'all\' })\">\n                Global Feed\n              </a>\n            </li>\n\n            <li class=\"nav-item\" ng-show=\"$ctrl.listConfig.filters.tag\">\n              <a href=\"\" class=\"nav-link active\">\n                <i class=\"ion-pound\"></i> {{$ctrl.listConfig.filters.tag}}\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"article-preview\">\n          <favorite-btn\n          class=\"pull-xs-right\">\n        </favorite-btn>\n      </div>\n      <!-- <deporte-list limit=\"10\" list-config=\"$ctrl.listConfig\"></deporte-list> -->\n    </div>\n    <listdepor deportes=\"$ctrl.deportesInfo\"></listdepor>\n    <!-- <div ui-view></div> -->\n\n      <!-- Sidebar where popular tags are listed -->\n      <div class=\"col-md-3\">\n        <div class=\"sidebar\">\n\n          <p>Popular Tags</p>\n\n          <div class=\"tag-list\" ng-show=\"$ctrl.tags\">\n            <a href=\"\" class=\"tag-default tag-pill\"\n              \n              ng-click=\"$ctrl.changeList({ type: \'all\', filters: { tag: tagName } })\"\n              ng-repeat=\"tagName in $ctrl.tags\"\n              ng-bind=\"tagName\">\n            </a>\n          </div>\n\n          <div ng-show=\"!$ctrl.tagsLoaded\">\n            Loading tags...\n          </div>\n\n          <div class=\"post-preview\"\n            ng-show=\"$ctrl.tagsLoaded && !$ctrl.tags.length\">\n            No tags are here... yet.\n          </div>\n\n        </div>\n      </div>\n\n      <!-- End the row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n\n    <a class=\"navbar-brand\"\n      ui-sref=\"app.home\"\n      ng-bind=\"::$ctrl.appName | lowercase\">\n    </a>\n\n    <!-- Show this for logged out users -->\n    <ul show-authed=\"false\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.login\">\n          Sign in\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.register\">\n          Sign up\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.contact\">\n          Contact\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.deporte\">\n          Deporte\n        </a>\n      </li>\n\n    </ul>\n\n    <!-- Show this for logged in users -->\n    <ul show-authed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.deporte\">\n          Deporte\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.editor\">\n          <i class=\"ion-compose\"></i>&nbsp;New Article\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.settings\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n          <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n          {{ $ctrl.currentUser.username }}\n        </a>\n      </li>\n\n    </ul>\n\n\n  </div>\n</nav>\n");
$templateCache.put("profile/profile-articles.html","<article-list limit=\"5\" list-config=\"$ctrl.listConfig\"></article-list>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img ng-src=\"{{::$ctrl.isUser.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.isUser.username\"></h4>\n          <p ng-bind=\"::$ctrl.isUser.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Articles\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of articles -->\n        <!-- <div ui-view></div> -->\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Nombre\"\n                ng-model=\"$ctrl.formData.nombre\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                ng-model=\"$ctrl.formData.bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          ng-click=\"$ctrl.logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/article-helpers/article-list.html","<article-preview\n  article=\"article\"\n  ng-repeat=\"article in $ctrl.list\">\n</article-preview>\n\n<div class=\"article-preview\"\n  ng-hide=\"!$ctrl.loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No articles are here... yet.\n</div>\n\n<list-pagination\n total-pages=\"$ctrl.listConfig.totalPages\"\n current-page=\"$ctrl.listConfig.currentPage\"\n ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination>\n");
$templateCache.put("components/article-helpers/article-meta.html","<div class=\"article-meta\">\n  <a ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\">\n    <img ng-src=\"{{$ctrl.article.author.image}}\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\"\n      ng-bind=\"$ctrl.article.author.username\">\n    </a>\n    <span class=\"date\"\n      ng-bind=\"$ctrl.article.createdAt | date: \'longDate\' \">\n    </span>\n  </div>\n\n  <ng-transclude></ng-transclude>\n</div>\n  ");
$templateCache.put("components/article-helpers/article-preview.html","<div class=\"article-preview\">\n  <article-meta article=\"$ctrl.article\">\n    <favorite-btn\n      article=\"$ctrl.article\"\n      class=\"pull-xs-right\">\n      {{$ctrl.article.favoritesCount}}\n    </favorite-btn>\n  </article-meta>\n\n  <a ui-sref=\"app.article({ slug: $ctrl.article.slug })\" class=\"preview-link\">\n    <h1 ng-bind=\"$ctrl.article.marca\"></h1>\n    <p ng-bind=\"$ctrl.article.modelo\"></p>\n    <span>Read more...</span><br>\n    <!-- <img ng-src=\"{{$ctrl.article.image1}}\"/> -->\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.article.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </a>\n</div>\n");
$templateCache.put("components/article-helpers/list-pagination.html","<nav>\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n      ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\"\n      ng-click=\"$ctrl.changePage(pageNumber)\">\n\n      <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n");
$templateCache.put("components/article-helpers/list-preview.html","<div class=\"list-preview\">\n    <list-meta deporte=\"$ctrl.deporte\">\n        <favorite-btn\n            deporte=\"$ctrl.deporte\"\n            class=\"pull-xs-right\">\n            {{$ctrl.deporte.favoritesCount}}\n        </favorite-btn>\n    </list-meta>\n\n    <a ui-sref=\"app.deporte({ slug: $ctrl.deporte.slug })\" class=\"preview-link\">\n        <h1 ng-bind=\"$ctrl.deporte.name\"></h1>\n        <p ng-bind=\"$ctrl.deporte.type\"></p>\n        <!-- <img ng-src=\"{{$ctrl.deporte.image1}}\"/> -->\n        <ul class=\"tag-list\">\n        <li class=\"tag-default tag-pill tag-outline\"\n            ng-repeat=\"tag in $ctrl.deporte.tagList\">\n            {{tag}}\n        </li>\n        </ul>\n    </a>\n</div>\n      ");
$templateCache.put("components/buttons/favorite-btn.html","<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.depor.favorited,\n              \'btn-primary\': $ctrl.depor.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n\n<span class=\"btn btn-sm\" ng-class=\"{\'disabled\' : $ctrl.isSubmitting}\"></span>\n");
$templateCache.put("components/buttons/follow-btn.html","<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>\n");
$templateCache.put("components/deporte-helpers/deporte-list.html","<deporte-preview\n  deporte=\"deporte\"\n  ng-repeat=\"deporte in $ctrl.list\">\n</deporte-preview>\n\n<div class=\"deporte-preview\"\n  ng-hide=\"!$ctrl.loading\">\n  Loading deportes...\n</div>\n\n<div class=\"deporte-preview\"\n  ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No deportes are here... yet.\n</div>\n\n<list-pagination\n  total-pages=\"$ctrl.listConfig.totalPages\"\n  current-page=\"$ctrl.listConfig.currentPage\"\n  ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination>");
$templateCache.put("components/deporte-helpers/deporte-meta.html","<div class=\"deporte-meta\">\n    <a ui-sref=\"app.profile.main({ username:$ctrl.deporte.author.username })\">\n      <img ng-src=\"{{$ctrl.deporte.author.image}}\" />\n    </a>\n  \n    <div class=\"info\">\n      <a class=\"author\"\n        ui-sref=\"app.profile.main({ username:$ctrl.deporte.author.username })\"\n        ng-bind=\"$ctrl.deporte.author.username\">\n      </a>\n      <span class=\"date\"\n        ng-bind=\"$ctrl.deporte.createdAt | date: \'longDate\' \">\n      </span>\n    </div>\n  \n    <ng-transclude></ng-transclude>\n  </div>\n    ");
$templateCache.put("components/deporte-helpers/deporte-preview.html","<div class=\"deporte-preview\">\n    <deporte-meta deporte=\"$ctrl.deporte\">\n      <favorite-btn\n        deporte=\"$ctrl.deporte\"\n        class=\"pull-xs-right\">\n        {{$ctrl.deporte.countFav}}\n      </favorite-btn>\n    </deporte-meta>\n  \n    <a ui-sref=\"app.deporte({ slug: $ctrl.deporte.slug })\" class=\"preview-link\">\n      <h1 ng-bind=\"$ctrl.deporte.name\"></h1>\n      <p ng-bind=\"$ctrl.deporte.type\"></p>\n      <span>Read more...</span><br>\n      <!-- <img ng-src=\"{{$ctrl.deporte.image1}}\"/> -->\n      <ul class=\"tag-list\">\n        <li class=\"tag-default tag-pill tag-outline\"\n          ng-repeat=\"tag in $ctrl.deporte.tagList\">\n          {{tag}}\n        </li>\n      </ul>\n    </a>\n  </div>\n  ");
$templateCache.put("components/deportes/deportes-compo.html","<div >\n    <div>\n        <btndepor favorito=\"deporte\" ng-repeat=\"deporte in $ctrl.deportes\"></btndepor>\n    </div>\n</div>");
$templateCache.put("components/deportes/deportes-fav.html","<div>\n    <a ui-sref=\"app.details({slug: $ctrl.favorito.slug})\" class=\"nav-link active\">\n        <i class=\"ion-pound\"></i>{{$ctrl.favorito.slug}}\n    </a>\n    <h2>Plataforma: {{$ctrl.favorito.name}} | Tipo: {{$ctrl.favorito.type}}</h2>\n</div>\n\n<favorite-btn\n    depor = \"$ctrl.favorito\"\n    {{$ctrl.favorito.countFav}}>\n</favorite-btn>");
$templateCache.put("components/details-home/home-details.html","");}]);