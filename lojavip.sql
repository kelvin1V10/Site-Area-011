CREATE TABLE IF NOT EXISTS `vipPurchases` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `identifier` VARCHAR(100) NOT NULL, -- Passport do jogador
    `product` VARCHAR(50) NOT NULL,    -- Nome do pacote VIP
    `granted` TINYINT(1) DEFAULT 0,    -- Se já foi entregue
    `granted_at` TIMESTAMP NULL,       -- Quando foi entregue
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `vipProducts` (`name`, `items`, `vehicles`, `perms`) VALUES
('vipbronze',
 '[{"item":"repairkit","amount":5},{"item":"bandage","amount":5}]',
 '["sultan"]',
 '[{"group":"Premium","hierarchy":"Bronze"}]'
),
('vipgold',
 '[{"item":"bandage","amount":10},{"item":"WEAPON_PISTOL_MK2","amount":1}]',
 '["adder","elegy"]',
 '[{"group":"Premium","hierarchy":"Ouro"}]'
);
