/*
 * This file is part of the @mscs/environment package.
 *
 * Copyright (c) 2020 media-service consulting & solutions GmbH
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

/**
 * The [[normalize|normalized]] form of a `.env.<extension>` file.
 */
export interface NormalizedValues {
    [key: string]: string;
}
