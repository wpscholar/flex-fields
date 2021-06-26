# Flex Fields

A library for working with fields in WordPress.

## Installation

- Run `composer require wpscholar/flex-fields`
- Make sure you require the `vendor/autoload.php` file in your project.

## Usage

### Register a field

```php
<?php

register_flex_field(
  'email_address',                      // The field name
  [                                     // The field arguments
    'field' => 'input',  
    'type' => 'email',
    'value' => 'john.doe@gmail.com',
  ],
  'default'                             // The group name, defaults to 'default'
);
```

### Render a field

```php
<?php

render_flex_field(
  'email_address',  // Field name 
  'default'         // The group name, defaults to 'default'
);
```

## Maintainers 

<a href="https://github.com/wpscholar">  
    <img src="https://avatars.githubusercontent.com/u/890951?v=4&s=60" alt="Micah Wood" style="border-radius:50%;" />
</a>

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/wpscholar/flex-fields/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wpscholar/flex-fields" alt="project contributors"/>
</a>
