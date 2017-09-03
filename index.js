let Plugin = require('gulp-query').Plugin
  , gulp = require('gulp')
  , del = require('del')
;

class CleanPlugin extends Plugin {

  static method() {
    return 'clean';
  }

  /**
   * @param task_name
   * @returns {Array}
   */
  watchTaskFiles(task_name) {
    return [];
  }

  _prepareConfig(config) {

    if (typeof config[0] === 'object') {
      config = config[0];
    } else {

      let new_config = {
        delete: config[0]
      };

      if (config[1]) {
        new_config.name = config[1];
      }

      config = new_config;
    }

    return config;
  }

  run(task_name, config, callback) {
    let files = config.delete;
    let parent_folder = 'parent_folder' in config ? config.parent_folder : null;

    if (!Array.isArray(files)) {
      files = [files];
    }

    let from = [];
    files.forEach((path) => {
      path = this.path(parent_folder ? (parent_folder + path) : path);
      from.push(path);
    });

    return del(from).then(() => {
      this.report(task_name, from, '-', true, [
        'remove'
      ]);
    });
  }
}

module.exports = CleanPlugin;