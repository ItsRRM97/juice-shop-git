/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */
// Added a Comment
require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
