import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Performer {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  specialization: string;
  experience: string;
  verified: boolean;
  price: string;
  distance: string;
  availability: string;
  responseTime: string;
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  searchQuery: string;
}

export const SearchModal = ({ open, onClose, searchQuery }: SearchModalProps) => {
  const [selectedTab, setSelectedTab] = useState<'auto' | 'manual'>('auto');
  const [isSearching, setIsSearching] = useState(false);
  const [foundPerformer, setFoundPerformer] = useState<Performer | null>(null);
  const [searchProgress, setSearchProgress] = useState(0);

  const nearbyPerformers: Performer[] = [
    {
      id: 1,
      name: 'Анна Смирнова',
      avatar: '',
      rating: 4.9,
      reviews: 127,
      specialization: 'Уборка квартир',
      experience: '3 года',
      verified: true,
      price: 'от 800 ₽/час',
      distance: '1.2 км',
      availability: 'Свободна сейчас',
      responseTime: '~5 мин'
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
      price: 'от 1200 ₽/час',
      distance: '2.5 км',
      availability: 'Свободен через 1 час',
      responseTime: '~10 мин'
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
      price: 'от 500 ₽/час',
      distance: '0.8 км',
      availability: 'Свободна сейчас',
      responseTime: '~3 мин'
    },
    {
      id: 4,
      name: 'Михаил Соколов',
      avatar: '',
      rating: 4.7,
      reviews: 156,
      specialization: 'Ремонт техники',
      experience: '7 лет',
      verified: true,
      price: 'от 1500 ₽/час',
      distance: '3.1 км',
      availability: 'Свободен сейчас',
      responseTime: '~15 мин'
    },
    {
      id: 5,
      name: 'Ольга Волкова',
      avatar: '',
      rating: 4.9,
      reviews: 201,
      specialization: 'Помощь с переездом',
      experience: '4 года',
      verified: true,
      price: 'от 1000 ₽/час',
      distance: '1.7 км',
      availability: 'Свободна сейчас',
      responseTime: '~7 мин'
    },
  ];

  useEffect(() => {
    if (selectedTab === 'auto' && open) {
      startAutoSearch();
    }
  }, [selectedTab, open]);

  const startAutoSearch = () => {
    setIsSearching(true);
    setSearchProgress(0);
    setFoundPerformer(null);

    const progressInterval = setInterval(() => {
      setSearchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    setTimeout(() => {
      const randomPerformer = nearbyPerformers[Math.floor(Math.random() * nearbyPerformers.length)];
      setFoundPerformer(randomPerformer);
      setIsSearching(false);
    }, 2500);
  };

  const handleConfirmBooking = () => {
    alert('Заказ подтвержден! Исполнитель уже в пути.');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Найти исполнителя</DialogTitle>
          <DialogDescription>
            Задача: <span className="font-semibold text-foreground">{searchQuery}</span>
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedTab} onValueChange={(v) => setSelectedTab(v as 'auto' | 'manual')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="auto" className="flex items-center gap-2">
              <Icon name="Zap" size={18} />
              Автоподбор
            </TabsTrigger>
            <TabsTrigger value="manual" className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              Выбрать самому
            </TabsTrigger>
          </TabsList>

          <TabsContent value="auto" className="space-y-6 mt-6">
            {isSearching ? (
              <div className="text-center py-12">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-8 border-primary/20 rounded-full"></div>
                  <div
                    className="absolute inset-0 border-8 border-primary border-t-transparent rounded-full animate-spin"
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Search" className="text-primary" size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ищем исполнителя...</h3>
                <p className="text-muted-foreground mb-4">
                  Анализируем профили и расстояние до вас
                </p>
                <div className="max-w-md mx-auto">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-200"
                      style={{ width: `${searchProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{searchProgress}%</p>
                </div>
              </div>
            ) : foundPerformer ? (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon name="CheckCircle2" className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Исполнитель найден!</h3>
                  <p className="text-muted-foreground">
                    Лучший специалист рядом с вами готов приступить
                  </p>
                </div>

                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={foundPerformer.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xl">
                          {foundPerformer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-bold">{foundPerformer.name}</h4>
                          {foundPerformer.verified && (
                            <Icon name="BadgeCheck" className="text-secondary" size={20} />
                          )}
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                          <span className="font-semibold">{foundPerformer.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({foundPerformer.reviews} отзывов)
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            {foundPerformer.distance} от вас
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1 text-green-600 border-green-600">
                            <Icon name="Clock" size={14} />
                            {foundPerformer.availability}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Специализация</p>
                          <p className="font-medium">{foundPerformer.specialization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Опыт работы</p>
                          <p className="font-medium">{foundPerformer.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="DollarSign" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Стоимость</p>
                          <p className="font-semibold text-primary">{foundPerformer.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Время отклика</p>
                          <p className="font-medium">{foundPerformer.responseTime}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button onClick={handleConfirmBooking} className="flex-1 h-12 text-lg">
                        <Icon name="CheckCircle2" className="mr-2" size={20} />
                        Подтвердить заказ
                      </Button>
                      <Button
                        variant="outline"
                        onClick={startAutoSearch}
                        className="px-6"
                      >
                        <Icon name="RefreshCcw" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </TabsContent>

          <TabsContent value="manual" className="space-y-4 mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="MapPin" className="text-primary" size={20} />
              <p className="text-sm text-muted-foreground">
                Показаны исполнители в радиусе 5 км от вашего местоположения
              </p>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {nearbyPerformers.map((performer) => (
                <Card key={performer.id} className="hover:shadow-md transition cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={performer.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {performer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold truncate">{performer.name}</h4>
                          {performer.verified && (
                            <Icon name="BadgeCheck" className="text-secondary flex-shrink-0" size={16} />
                          )}
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                          <span className="font-semibold text-sm">{performer.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({performer.reviews})
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            <Icon name="MapPin" size={12} className="mr-1" />
                            {performer.distance}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              performer.availability.includes('сейчас')
                                ? 'text-green-600 border-green-600'
                                : 'text-orange-600 border-orange-600'
                            }
                          >
                            <Icon name="Clock" size={12} className="mr-1" />
                            {performer.availability}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">
                              {performer.specialization} • {performer.experience}
                            </p>
                            <p className="font-semibold text-primary">{performer.price}</p>
                          </div>
                          <Button size="sm" onClick={handleConfirmBooking}>
                            Выбрать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
