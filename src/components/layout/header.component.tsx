'use client';

import React, { useEffect, useState } from 'react'
import Input from '../ui/input/input.component'
import { useMovieContext } from '@/contexts/movie.context'
import classes from './styles.module.scss';
import Image from 'next/image';
import { Moon, Search, Sun, X } from 'lucide-react';
import { useThemeContext } from '@/contexts/theme.context';

const Header = () => {
  const { query, setQuery } = useMovieContext();
  const { theme, toggleTheme } = useThemeContext()

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <Image
          src='/logo.svg'
          alt='logo'
          priority
          width={170}
          height={50}
        />
      </div>
      <div className={classes.header__search}>
        <Input
          value={query}
          onChange={setQuery}
          placeholder='Search…'
          type='text'
          leftIcon={<Search />}
          rightIcon={query ? <X onClick={() => setQuery('')} className={classes.clickable} /> : undefined}
        />
      </div>
      <div className={classes.header__theme} onClick={toggleTheme}>
        {hasMounted ? (theme === 'dark' ? <Sun /> : <Moon />) : null}
      </div>
    </div>
  )
}

export default Header