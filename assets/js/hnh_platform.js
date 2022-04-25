hnh_platform = (function() {
    return {
        is_macos: function() {
            return (navigator.userAgent.indexOf('Mac') != -1);
        },
        
        is_windows: function() {
            return (navigator.userAgent.indexOf('Win') != -1);
        },
        
        is_linux: function() {
            return (navigator.userAgent.indexOf('Linux') != -1);
        },
        
        is_unix: function() {
            return (navigator.userAgent.indexOf('X11') != -1);
        },
    }
})();