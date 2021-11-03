# The Gilded Rose Kata

## Setup

This repository includes the initial setup for this Kata, including the specs.
It uses [Kahlan](https://kahlan.github.io/docs/getting-started.html),
which you might not be familiar with. But, don't worry, there's nothing really
to learn. Review the specs, and you'll understand the basic syntax in less than
a minute.

Note that specs start with the keyword `it`. Specs that start with the keyword
`xit` are skipped. They may be executed by changing `xit` to `it`.

In the project directory, run:

```
composer install
```

To run the spec suite, run:

```
./bin/kahlan
```

Your task is to implement implement a new feature. The feature is described by
the skipped specs in `spec/GildedRoseSpec.php`. The task is complete when
all the specs are passing.
