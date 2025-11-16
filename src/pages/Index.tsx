import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { SearchModal } from '@/components/SearchModal';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearchModalOpen(true);
    }
  };

  const categories = [
    { name: 'Уборка квартиры', icon: 'Home', count: 234 },
    { name: 'Сборка мебели', icon: 'Wrench', count: 189 },
    { name: 'Упаковка подарков', icon: 'Gift', count: 87 },
    { name: 'Помощь с переездом', icon: 'Truck', count: 156 },
    { name: 'Ремонт техники', icon: 'Settings', count: 143 },
    { name: 'Доставка покупок', icon: 'ShoppingBag', count: 201 },
  ];

  const performers = [
    {
      id: 1,
      name: 'Анна Смирнова',
      avatar: '',
      rating: 4.9,
      reviews: 127,
      specialization: 'Уборка квартир',
      experience: '3 года',
      verified: true,
      price: 'от 800 ₽/час'
    },
    {
      id: 2,
      name: 'Дмитрий Ковалёв',
      avatar: '',
      rating: 4.8,
      reviews: 93,
      specialization: 'Сборка мебели',
      experience: '5 лет',
      verified: true,
      price: 'от 1200 ₽/час'
    },
    {
      id: 3,
      name: 'Елена Петрова',
      avatar: '',
      rating: 5.0,
      reviews: 84,
      specialization: 'Упаковка подарков',
      experience: '2 года',
      verified: true,
      price: 'от 500 ₽/час'
    },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Мария К.',
      rating: 5,
      text: 'Отличный сервис! Нашла специалиста за 10 минут, уборка была выполнена качественно.',
      date: '2 дня назад',
    },
    {
      id: 2,
      author: 'Александр М.',
      rating: 5,
      text: 'Помогли собрать шкаф в короткие сроки. Мастер приехал вовремя, работал аккуратно.',
      date: '5 дней назад',
    },
  ];

  const faqs = [
    {
      question: 'Как найти исполнителя?',
      answer: 'Опишите вашу задачу, выберите подходящего специалиста из списка, договоритесь о деталях и подтвердите заказ.',
    },
    {
      question: 'Как работает гарантия безопасности?',
      answer: 'Все исполнители проходят верификацию через документы. Мы страхуем каждую сделку и гарантируем возврат средств при невыполнении.',
    },
    {
      question: 'Как оплатить услугу?',
      answer: 'Оплата производится после выполнения работы через защищенную платформу. Деньги переводятся исполнителю только после вашего подтверждения.',
    },
    {
      question: 'Что делать, если что-то пошло не так?',
      answer: 'Свяжитесь с нашей службой поддержки через чат или телефон. Мы разберем ситуацию и поможем найти решение.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">ПомощьРядом</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition">Услуги</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition">Как это работает</a>
            <a href="#guarantees" className="text-sm font-medium hover:text-primary transition">Гарантии</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition">Отзывы</a>
          </nav>
          <Button>Войти</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6">Найдите помощника для любой задачи</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Быстро, надежно, безопасно. Тысячи проверенных специалистов готовы помочь вам.
          </p>
          <div className="flex gap-2 max-w-2xl mx-auto">
            <Input
              placeholder="Что нужно сделать? Например: убрать квартиру"
              className="h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button size="lg" className="h-14 px-8" onClick={handleSearch}>
              <Icon name="Search" className="mr-2" size={20} />
              Найти
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-secondary" size={20} />
              <span>Страхование сделок</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="BadgeCheck" className="text-secondary" size={20} />
              <span>Проверенные исполнители</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" className="text-secondary" size={20} />
              <span>Быстрый отклик</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные категории</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                      <Icon name={category.icon as any} className="text-primary" size={28} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.count} специалистов</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Как это работает</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: 1, icon: 'FileText', title: 'Опишите задачу', desc: 'Расскажите, что нужно сделать' },
              { step: 2, icon: 'Users', title: 'Выберите исполнителя', desc: 'Сравните профили и отзывы' },
              { step: 3, icon: 'CheckCircle2', title: 'Договоритесь о деталях', desc: 'Согласуйте время и цену' },
              { step: 4, icon: 'Star', title: 'Оцените работу', desc: 'Подтвердите выполнение и оставьте отзыв' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <Icon name={item.icon as any} className="mx-auto text-primary mb-4" size={32} />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section id="guarantees" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Гарантии безопасности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'ShieldCheck',
                title: 'Верификация исполнителей',
                desc: 'Проверка документов и личности каждого специалиста',
              },
              {
                icon: 'Star',
                title: 'Система рейтингов',
                desc: 'Реальные отзывы и оценки от клиентов',
              },
              {
                icon: 'RefreshCcw',
                title: 'Гарантия возврата',
                desc: 'Вернем деньги при невыполнении работы',
              },
              {
                icon: 'Lock',
                title: 'Страхование сделок',
                desc: 'Защита от непредвиденных ситуаций',
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Лучшие исполнители</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {performers.map((performer) => (
              <Card key={performer.id} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={performer.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        {performer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{performer.name}</h4>
                        {performer.verified && (
                          <Icon name="BadgeCheck" className="text-secondary" size={18} />
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="font-semibold text-sm">{performer.rating}</span>
                        <span className="text-xs text-muted-foreground">({performer.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                      <span>{performer.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>Опыт: {performer.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={16} className="text-muted-foreground" />
                      <span className="font-semibold text-primary">{performer.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Связаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{review.author}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                  <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Частые вопросы</h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Готовы начать?</h3>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам довольных клиентов уже сегодня
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg">
            Найти исполнителя
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={28} />
                <h4 className="text-xl font-bold">ПомощьРядом</h4>
              </div>
              <p className="text-sm text-slate-400">
                Надежная платформа для поиска помощников по любым задачам
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Все категории</a></li>
                <li><a href="#" className="hover:text-white transition">Популярные</a></li>
                <li><a href="#" className="hover:text-white transition">Новые</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Гарантии</a></li>
                <li><a href="#" className="hover:text-white transition">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>support@pomoshchrydom.ru</li>
                <li>8 (800) 555-35-35</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 ПомощьРядом. Все права защищены.
          </div>
        </div>
      </footer>

      <SearchModal 
        open={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Index;