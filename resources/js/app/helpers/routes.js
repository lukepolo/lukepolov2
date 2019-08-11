(function() {
  var laroute = function() {
    var routes = {
      absolute: false,
      rootUrl: "http://lukepolo.test",
      routes: [
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_debugbar/open",
          name: "debugbar.openhandler",
          action: "BarryvdhDebugbarControllersOpenHandlerController@handle",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_debugbar/clockwork/{id}",
          name: "debugbar.clockwork",
          action: "BarryvdhDebugbarControllersOpenHandlerController@clockwork",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_debugbar/telescope/{id}",
          name: "debugbar.telescope",
          action: "BarryvdhDebugbarControllersTelescopeController@show",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_debugbar/assets/stylesheets",
          name: "debugbar.assets.css",
          action: "BarryvdhDebugbarControllersAssetController@css",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_debugbar/assets/javascript",
          name: "debugbar.assets.js",
          action: "BarryvdhDebugbarControllersAssetController@js",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "_debugbar/cache/{key}/{tags?}",
          name: "debugbar.cache.delete",
          action: "BarryvdhDebugbarControllersCacheController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/authorize",
          name: "passport.authorizations.authorize",
          action:
            "LaravelPassportHttpControllersAuthorizationController@authorize",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "oauth/authorize",
          name: "passport.authorizations.approve",
          action:
            "LaravelPassportHttpControllersApproveAuthorizationController@approve",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "oauth/authorize",
          name: "passport.authorizations.deny",
          action:
            "LaravelPassportHttpControllersDenyAuthorizationController@deny",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "oauth/token",
          name: "passport.token",
          action:
            "LaravelPassportHttpControllersAccessTokenController@issueToken",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/tokens",
          name: "passport.tokens.index",
          action:
            "LaravelPassportHttpControllersAuthorizedAccessTokenController@forUser",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "oauth/tokens/{token_id}",
          name: "passport.tokens.destroy",
          action:
            "LaravelPassportHttpControllersAuthorizedAccessTokenController@destroy",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "oauth/token/refresh",
          name: "passport.token.refresh",
          action:
            "LaravelPassportHttpControllersTransientTokenController@refresh",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/clients",
          name: "passport.clients.index",
          action: "LaravelPassportHttpControllersClientController@forUser",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "oauth/clients",
          name: "passport.clients.store",
          action: "LaravelPassportHttpControllersClientController@store",
        },
        {
          host: null,
          methods: ["PUT"],
          uri: "oauth/clients/{client_id}",
          name: "passport.clients.update",
          action: "LaravelPassportHttpControllersClientController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "oauth/clients/{client_id}",
          name: "passport.clients.destroy",
          action: "LaravelPassportHttpControllersClientController@destroy",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/scopes",
          name: "passport.scopes.index",
          action: "LaravelPassportHttpControllersScopeController@all",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/personal-access-tokens",
          name: "passport.personal.tokens.index",
          action:
            "LaravelPassportHttpControllersPersonalAccessTokenController@forUser",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "oauth/personal-access-tokens",
          name: "passport.personal.tokens.store",
          action:
            "LaravelPassportHttpControllersPersonalAccessTokenController@store",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "oauth/personal-access-tokens/{token_id}",
          name: "passport.personal.tokens.destroy",
          action:
            "LaravelPassportHttpControllersPersonalAccessTokenController@destroy",
        },
        {
          host: null,
          methods: ["GET", "POST", "HEAD"],
          uri: "broadcasting/auth",
          name: null,
          action: "IlluminateBroadcastingBroadcastController@authenticate",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/tags",
          name: null,
          action: "TagsController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/tags",
          name: "tags.store",
          action: "TagsController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/tags/{tag}",
          name: "tags.show",
          action: "TagsController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/tags/{tag}",
          name: "tags.update",
          action: "TagsController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/tags/{tag}",
          name: "tags.destroy",
          action: "TagsController@destroy",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/blogs/{blog}",
          name: null,
          action: "BlogsController@update",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/blogs",
          name: null,
          action: "BlogsController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/blogs",
          name: "blogs.store",
          action: "BlogsController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/blogs/{blog}",
          name: null,
          action: "BlogsController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/blogs/{blog}",
          name: "blogs.update",
          action: "BlogsController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/blogs/{blog}",
          name: "blogs.destroy",
          action: "BlogsController@destroy",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/projects/{project}",
          name: null,
          action: "ProjectsController@update",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/users",
          name: "users.index",
          action: "UsersController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/users",
          name: "users.store",
          action: "UsersController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/users/{user}",
          name: "users.show",
          action: "UsersController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/users/{user}",
          name: "users.update",
          action: "UsersController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/users/{user}",
          name: "users.destroy",
          action: "UsersController@destroy",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/projects",
          name: null,
          action: "ProjectsController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/projects",
          name: "projects.store",
          action: "ProjectsController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/projects/{project}",
          name: "projects.show",
          action: "ProjectsController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/projects/{project}",
          name: "projects.update",
          action: "ProjectsController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/projects/{project}",
          name: "projects.destroy",
          action: "ProjectsController@destroy",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/timelines",
          name: null,
          action: "TimelinesController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/timelines",
          name: "timelines.store",
          action: "TimelinesController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/timelines/{timeline}",
          name: "timelines.show",
          action: "TimelinesController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/timelines/{timeline}",
          name: "timelines.update",
          action: "TimelinesController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/timelines/{timeline}",
          name: "timelines.destroy",
          action: "TimelinesController@destroy",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/technologies",
          name: "technologies.index",
          action: "TechnologiesController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/technologies",
          name: "technologies.store",
          action: "TechnologiesController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/technologies/{technology}",
          name: "technologies.show",
          action: "TechnologiesController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/technologies/{technology}",
          name: "technologies.update",
          action: "TechnologiesController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/technologies/{technology}",
          name: "technologies.destroy",
          action: "TechnologiesController@destroy",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/blogs/{blog}/comments",
          name: null,
          action: "BlogCommentsController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "api/blogs/{blog}/comments",
          name: "blogs.comments.store",
          action: "BlogCommentsController@store",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/blogs/{blog}/comments/{comment}",
          name: "blogs.comments.show",
          action: "BlogCommentsController@show",
        },
        {
          host: null,
          methods: ["PUT", "PATCH"],
          uri: "api/blogs/{blog}/comments/{comment}",
          name: "blogs.comments.update",
          action: "BlogCommentsController@update",
        },
        {
          host: null,
          methods: ["DELETE"],
          uri: "api/blogs/{blog}/comments/{comment}",
          name: "blogs.comments.destroy",
          action: "BlogCommentsController@destroy",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/admin/blog-comments",
          name: null,
          action: "ModerateBlogCommentsController@index",
        },
        {
          host: null,
          methods: ["PATCH"],
          uri: "api/admin/blog-comments/{comment}",
          name: null,
          action: "ModerateBlogCommentsController@update",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/admin/most-visited-pages",
          name: null,
          action: "PopularPagesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/admin/visitors-and-page-views",
          name: null,
          action: "VisitorsController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "logout",
          name: null,
          action: "AuthOAuthController@logout",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/{provider}",
          name: null,
          action: "AuthOAuthController@redirect",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "oauth/callback/{provider}",
          name: null,
          action: "AuthOAuthController@callback",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "{any}",
          name: null,
          action: "Controller@app",
        },
      ],
      prefix: "",

      route: function(name, parameters, route) {
        route = route || this.getByName(name);

        if (!route) {
          return undefined;
        }

        return this.toRoute(route, parameters);
      },

      url: function(url, parameters) {
        parameters = parameters || [];

        var uri = url + "/" + parameters.join("/");

        return this.getCorrectUrl(uri);
      },

      toRoute: function(route, parameters) {
        var uri = this.replaceNamedParameters(route.uri, parameters);
        var qs = this.getRouteQueryString(parameters);

        if (this.absolute && this.isOtherHost(route)) {
          return "//" + route.host + "/" + uri + qs;
        }

        return this.getCorrectUrl(uri + qs);
      },

      isOtherHost: function(route) {
        return route.host && route.host != window.location.hostname;
      },

      replaceNamedParameters: function(uri, parameters) {
        uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
          if (parameters.hasOwnProperty(key)) {
            var value = parameters[key];
            delete parameters[key];
            return value;
          } else {
            return match;
          }
        });

        // Strip out any optional parameters that were not given
        uri = uri.replace(/\/\{.*?\?\}/g, "");

        return uri;
      },

      getRouteQueryString: function(parameters) {
        var qs = [];
        for (var key in parameters) {
          if (parameters.hasOwnProperty(key)) {
            qs.push(key + "=" + parameters[key]);
          }
        }

        if (qs.length < 1) {
          return "";
        }

        return "?" + qs.join("&");
      },

      getByName: function(name) {
        for (var key in this.routes) {
          if (
            this.routes.hasOwnProperty(key) &&
            this.routes[key].name === name
          ) {
            return this.routes[key];
          }
        }
      },

      getByAction: function(action) {
        for (var key in this.routes) {
          if (
            this.routes.hasOwnProperty(key) &&
            this.routes[key].action === action
          ) {
            return this.routes[key];
          }
        }
      },

      getCorrectUrl: function(uri) {
        var url = this.prefix + "/" + uri.replace(/^\/?/, "");

        if (!this.absolute) {
          return url;
        }

        return this.rootUrl.replace("//?$/", "") + url;
      },
    };

    var getLinkAttributes = function(attributes) {
      if (!attributes) {
        return "";
      }

      var attrs = [];
      for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          attrs.push(key + '="' + attributes[key] + '"');
        }
      }

      return attrs.join(" ");
    };

    var getHtmlLink = function(url, title, attributes) {
      title = title || url;
      attributes = getLinkAttributes(attributes);

      return '<a href="' + url + '" ' + attributes + ">" + title + "</a>";
    };

    return {
      // Generate a url for a given controller action.
      // laroute.action('HomeController@getIndex', [params = {}])
      action: function(name, parameters) {
        parameters = parameters || {};

        return routes.route(name, parameters, routes.getByAction(name));
      },

      // Generate a url for a given named route.
      // laroute.route('routeName', [params = {}])
      route: function(route, parameters) {
        parameters = parameters || {};

        return routes.route(route, parameters);
      },

      // Generate a fully qualified URL to the given path.
      // laroute.route('url', [params = {}])
      url: function(route, parameters) {
        parameters = parameters || {};

        return routes.url(route, parameters);
      },

      // Generate a html link to the given url.
      // laroute.link_to('foo/bar', [title = url], [attributes = {}])
      link_to: function(url, title, attributes) {
        url = this.url(url);

        return getHtmlLink(url, title, attributes);
      },

      // Generate a html link to the given route.
      // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
      link_to_route: function(route, title, parameters, attributes) {
        var url = this.route(route, parameters);

        return getHtmlLink(url, title, attributes);
      },

      // Generate a html link to the given controller action.
      // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
      link_to_action: function(action, title, parameters, attributes) {
        var url = this.action(action, parameters);

        return getHtmlLink(url, title, attributes);
      },
    };
  }.call(this);

  /**
   * Expose the class either via AMD, CommonJS or the global object
   */
  if (typeof define === "function" && define.amd) {
    define(function() {
      return laroute;
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = laroute;
  } else {
    window.laroute = laroute;
  }
}.call(this));
