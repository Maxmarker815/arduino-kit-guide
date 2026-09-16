# -*- coding: utf-8 -*-
"""Проставляет в ссылки на стили и скрипты свежий номер версии, чтобы браузер
покупателя не подсовывал старый файл из своей памяти.

Запускается сам из собрать-курс.py. Если правишь только theme.css, site.css
или kit.js, запусти вручную:  python сборка/обновить-версию.py
"""
import re, os, io

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE = os.path.abspath(os.path.join(ROOT, '..'))
FILES = ('theme.css', 'site.css', 'kit.js')

# Версия одна на все три файла — время последней правки самого свежего из них.
stamps = [int(os.path.getmtime(os.path.join(BASE, f)))
          for f in FILES if os.path.exists(os.path.join(BASE, f))]
v = str(max(stamps)) if stamps else '1'

for name in ('index.html', 'course.html', 'help.html'):
    p = os.path.join(BASE, name)
    if not os.path.exists(p):
        continue
    h = io.open(p, encoding='utf-8').read()
    h2 = h
    for f in FILES:
        attr = 'src' if f.endswith('.js') else 'href'
        h2 = re.sub(r'%s="%s(\?v=\d+)?"' % (attr, re.escape(f)),
                    '%s="%s?v=%s"' % (attr, f, v), h2)
    if h2 != h:
        io.open(p, 'w', encoding='utf-8', newline='').write(h2)
    print(name, '-> ?v=' + v)
